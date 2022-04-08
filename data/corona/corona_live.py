from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import pymysql

from datetime import datetime
from datetime import date


# DB의 가장 최신 row의 날짜를 뽑아오기
def db_date_chk(name):
    global path, options

    conn = pymysql.connect(host='j6d108.p.ssafy.io', user='seungwon', password='ssafyd108!', db='lemonaiddb', charset='utf8')
    cursor = conn.cursor()

    sql_select_date = """
        SELECT corona_{}_date FROM corona_{}
        ORDER BY corona_{}_date DESC
        LIMIT 1
    """.format(name, name, name)

    cursor.execute(sql_select_date)
    result = cursor.fetchall()
    for data in result:
        # print(type(data[0].year), type(data[0].month), type(data[0].day))
        db_year = data[0].year
        db_month = data[0].month
        db_day = data[0].day
    
    conn.commit()
    conn.close()

    return (db_year, db_month, db_day)


# 질병관리청의 데이터가 업데이트된 날짜를 가져오기
def data_date_chk():
    global path, options

    driver = webdriver.Chrome(path, options=options)
    driver.get("http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun=")

    wait = WebDriverWait(driver, 10)

    data_date = wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="content"]/div/div[2]/p/span')))
    temp = data_date.text.split(' ')
    data_year = int(temp[0].split('년')[0])
    data_month, data_day = map(int, temp[1].split('.')[:2])
    return (data_year, data_month, data_day)


# 질병관리청의 시도별 확진자 현황 가져오기
def get_corona_local(f_date):
    global path, options
    ret = []
    ret.append(f_date)
    driver = webdriver.Chrome(path, options=options)
    driver.get("http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun=")

    wait = WebDriverWait(driver, 10)

    table = wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="content"]/div/div[5]/table/tbody')))
    trs = table.find_elements(By.TAG_NAME, "tr")

    for tr in trs:
        td = tr.find_element(By.TAG_NAME, "td").text
        temp = td.replace(',', '')
        ret.append(temp)
    driver.close()

    return ret


# 질병관리청의 성별 확진자 현황 가져오기
def get_corona_gender():
    global path, options
    ret = []

    driver = webdriver.Chrome(path, options=options)
    driver.get("http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun=")

    wait = WebDriverWait(driver, 10)

    men = wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="content"]/div/div[15]/table/tbody/tr[1]/td[1]/span[1]'))).text
    women = wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="content"]/div/div[15]/table/tbody/tr[2]/td[1]/span[1]'))).text
    
    ret.append(int(men.replace(',', '')))
    ret.append(int(women.replace(',', '')))
    driver.close()
    return ret


# 질병관리청의 연령별 확진자 현황 가져오기
def get_corona_age(f_date):
    global path, options
    ret = []
    ret.append(f_date)
    driver = webdriver.Chrome(path, options=options)
    driver.get("http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun=")

    wait = WebDriverWait(driver, 10)

    tbody = wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="content"]/div/div[17]/table/tbody')))
    trs = tbody.find_elements(By.TAG_NAME, 'tr')
    for tr in trs:
        td = tr.find_element(By.TAG_NAME, "td")
        span = td.find_element(By.TAG_NAME, "span").text
        ret.append(int(span.replace(',', '')))
    
    return ret


# 크롤링한 corona_count mysql에 insert
def insert_corona_count(data):
    conn = pymysql.connect(host='j6d108.p.ssafy.io', user='seungwon', password='ssafyd108!', db='lemonaiddb', charset='utf8')
    cursor = conn.cursor()

    sql_insert = "insert into corona_count(corona_count_date, corona_count_total, corona_count_seoul, \
    corona_count_busan, corona_count_daegu, corona_count_incheon, corona_count_gwangju, \
    corona_count_daejeon, corona_count_ulsan, corona_count_sejong, corona_count_gyeonggi, \
    corona_count_gangwon, corona_count_chungn, corona_count_chungs, corona_count_jeonn, \
    corona_count_jeons, corona_count_gyeongn, corona_count_jeju, corona_count_gyeongs, corona_count_gita) \
    values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) \
    "

    cursor.execute(sql_insert, data)
    conn.commit()
    conn.close()

    return


def insert_corona_gender(f_date, data):
    conn = pymysql.connect(host='j6d108.p.ssafy.io', user='seungwon', password='ssafyd108!', db='lemonaiddb', charset='utf8')
    cursor = conn.cursor()
    ret = []
    ret.append(f_date)

    sql_select_sum = """
    SELECT SUM(corona_gender_men), SUM(corona_gender_women) FROM corona_gender
    """

    sql_insert_gender = "insert into corona_gender(corona_gender_date, corona_gender_men, corona_gender_women) values (%s, %s, %s)"

    cursor.execute(sql_select_sum)
    result = cursor.fetchall()
    for res in result:
        data_men_total = int(res[0])
        data_women_total = int(res[1])

    ret.append(data[0] - data_men_total)
    ret.append(data[1] - data_women_total)

    insert_data = tuple(ret)

    cursor.execute(sql_insert_gender, insert_data)

    conn.commit()
    conn.close()

    return


def insert_corona_age(data):
    conn = pymysql.connect(host='j6d108.p.ssafy.io', user='seungwon', password='ssafyd108!', db='lemonaiddb', charset='utf8')
    cursor = conn.cursor()

    sql_select_sum = """
    SELECT SUM(corona_age_80), SUM(corona_age_70), SUM(corona_age_60), SUM(corona_age_50), SUM(corona_age_40), SUM(corona_age_30), SUM(corona_age_20), SUM(corona_age_10), SUM(corona_age_0) FROM corona_age
    """
    
    sql_insert_age = "insert into corona_age(corona_age_date, corona_age_80, corona_age_70, corona_age_60, corona_age_50, corona_age_40, corona_age_30, corona_age_20, corona_age_10, corona_age_0) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"

    
    cursor.execute(sql_select_sum)
    result = cursor.fetchall()
    for i in range(9):
        data[i+1] -= int(result[0][i])
    insert_data = tuple(data)

    cursor.execute(sql_insert_age, insert_data)
    conn.commit()
    conn.close()
    return


# ubuntu chromedriver 경로
path = '/home/ubuntu/chromedriver'

# window chromedriver 경로
# path = 'C:/Users/User/ssafy_6/2학기/S06P22D108/data/corona/chromedriver'


options = webdriver.ChromeOptions()
# 창이 뜨지 않게 설정
options.add_argument('--headless')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')


dt_y, dt_m, dt_d = data_date_chk()
# print(dt_y, dt_m, dt_d)
db_y, db_m, db_d = db_date_chk('count')
# print(db_y, db_m, db_d)

if db_y == dt_y and db_m == dt_m and db_d == dt_d:
    print("count 최신상태!")
else:
    print("크롤링해서 count DB 최신화하자")
    my_date = '{}'.format(date(dt_y, dt_m, dt_d))
    # corona_count 정보 긁어오기
    ret_corona_local = get_corona_local(my_date)
    # corona_count insert
    insert_corona_count(tuple(ret_corona_local))

db_y, db_m, db_d = db_date_chk('gender')

if db_y == dt_y and db_m == dt_m and db_d == dt_d:
    print("gender 최신상태!")
else:
    print("크롤링해서 gender DB 최신화하자")
    my_date = '{}'.format(date(dt_y, dt_m, dt_d))
    # corona_gender 정보 긁어오기
    ret_corona_gender = get_corona_gender()
    # corona_gender insert
    insert_corona_gender(my_date, ret_corona_gender)

db_y, db_m, db_d = db_date_chk('age')

if db_y == dt_y and db_m == dt_m and db_d == dt_d:
    print("age 최신상태!")
else:
    print("크롤링해서 age DB 최신화하자")
    my_date = '{}'.format(date(dt_y, dt_m, dt_d))
    # corona_age 정보 긁어오기
    ret_corona_age = get_corona_age(my_date)
    # corona_age insert
    insert_corona_age(ret_corona_age)