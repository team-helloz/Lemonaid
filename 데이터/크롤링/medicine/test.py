from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

from urllib.parse import urlparse
import time


driver = webdriver.Chrome()

url = 'https://terms.naver.com/entry.naver?docId='
params = '&cid=51000&categoryId=51000'

result = []
cnt = 0

for i in range(370, 10000000):
    temp = url + str(i) + params
    driver.get(temp)
    time.sleep(1)

    try:
        a = driver.find_element(By.CLASS_NAME, 'cite')
    except:
        continue

    fact_url = driver.current_url
    x, y, z = urlparse(fact_url).query.split("&")
    if y == 'cid=51000' and z == 'categoryId=51000' and a == '의약품 사전':
        cnt += 1
        x1, x2 = x.split("=")
        result.append(x2)
        print(x2, a)
print(result)
driver.close()
