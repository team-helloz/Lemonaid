from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import pymysql

from datetime import datetime
from datetime import date


# DB의 가장 최신 row의 날짜를 뽑아오기
def db_date_chk():
    global path, options

    conn = pymysql.connect(host='j6d108.p.ssafy.io', user='seungwon', password='ssafyd108!', db='lemonaiddb', charset='utf8')
    cursor = conn.cursor()

    sql_select_date = """
        SELECT corona_count_date FROM corona_count
        ORDER BY corona_count_date DESC
        LIMIT 1
    """

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


# 크롤링한 corona_count mysql에 insert
def insert_corona_count(data):
    global path, options

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

# ubuntu chromedriver 경로
path = '/home/ubuntu/chromedriver'

# window chromedriver 경로
# path = 'C:/Users/User/ssafy_6/2학기/S06P22D108/data/corona/chromedriver'


options = webdriver.ChromeOptions()
# 창이 뜨지 않게 설정
options.add_argument('--headless')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')

# get_corona_local()
db_y, db_m, db_d = db_date_chk()
print(db_y, db_m, db_d)

dt_y, dt_m, dt_d = data_date_chk()
print(dt_y, dt_m, dt_d)

if db_y == dt_y and db_m == dt_m and db_d == dt_d:
    print("최신상태!")
else:
    print("크롤링해서 DB 최신화하자")
    my_date = '{}'.format(date(dt_y, dt_m, dt_d))

    # corona_count 정보 긁어오기
    ret_corona_local = get_corona_local(my_date)
    # corona_count insert
    insert_corona_count(tuple(ret_corona_local))
    # corona_age 정보 긁어오기

    # corona_age insert

    # corona_gender 정보 긁어오기

    # corona_gender insert