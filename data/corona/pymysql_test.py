import pymysql
from datetime import datetime
from datetime import date

conn = pymysql.connect(host='j6d108.p.ssafy.io', user='seungwon', password='ssafyd108!', db='lemonaiddb', charset='utf8')
cursor = conn.cursor()

sql_test = """
    SELECT SUM(corona_gender_men), SUM(corona_gender_women) FROM corona_gender
"""

sql = """
    SELECT * FROM corona_count
    WHERE corona_count_date = '{}'
""".format(date(datetime.today().year, datetime.today().month, datetime.today().day-1))

sql_select_gender = """
    SELECT * FROM corona_gender
    WHERE corona_gender_date = '{}'
""".format(date(datetime.today().year, datetime.today().month, datetime.today().day-1))

sql_select_age = """
    SELECT * FROM corona_age
    WHERE corona_age_date = '{}'
""".format(date(datetime.today().year, datetime.today().month, datetime.today().day-1))

# sql_insert = "insert into corona_count(corona_count_date, corona_count_total, corona_count_seoul, \
#     corona_count_busan, corona_count_daegu, corona_count_incheon, corona_count_gwangju, \
#     corona_count_daejeon, corona_count_ulsan, corona_count_sejong, corona_count_gyeonggi, \
#     corona_count_gangwon, corona_count_chungn, corona_count_chungs, corona_count_jeonn, \
#     corona_count_jeons, corona_count_gyeongn, corona_count_jeju, corona_count_gyeongs, corona_count_gita) \
#     values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) \
# "
my_date = '{}'.format(date(2022, 3, 29))

# cursor.execute(sql_insert, (my_date, '347554', '66079', '19969', '17817', '18826', '7920', '11124', '7573', '2476', '88702', '10508', '13075', '13997', '15098', '13632', '14911', '22498', '3329', '20'))
# conn.commit()

# sql_insert_gender = "insert into corona_gender(corona_gender_date, corona_gender_men, corona_gender_women) values (%s, %s, %s)"
# cursor.execute(sql_insert_gender, (my_date, '164249', '183305'))
# conn.commit()

# sql_insert_age = "insert into corona_age(corona_age_date, corona_age_0, corona_age_10, corona_age_20, corona_age_30, corona_age_40, corona_age_50, corona_age_60, corona_age_70, corona_age_80) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
# cursor.execute(sql_insert_age, (my_date, 49357, 49997, 43024, 51924, 55333, 41494, 31996, 16097, 8332))
# conn.commit()

# cursor.execute(sql)
# cursor.execute(sql_select_gender)
# cursor.execute(sql_select_age)

cursor.execute(sql_test)

result = cursor.fetchall()
for data in result:
    print(int(data[0]))

conn.commit()
conn.close()