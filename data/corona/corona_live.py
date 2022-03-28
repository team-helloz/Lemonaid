from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

path = '/home/ubuntu/chromedriver'
options = webdriver.ChromeOptions()
# 창이 뜨지 않게 설정
options.add_argument('headless')

driver = webdriver.Chrome(path)
driver.get("http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun=")

wait = WebDriverWait(driver, 5)

table = wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="content"]/div/div[5]/table/tbody')))
trs = table.find_elements(By.TAG_NAME, "tr")

for tr in trs:
    print(tr.text)

driver.close()

