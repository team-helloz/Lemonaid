from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By


driver = webdriver.Chrome()
url = 'https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=200809076'
driver.get(url)

temp = []


try:
    a1 = driver.find_element_by_css_selector('#scroll_02 > h3.cont_title3.mt27.pb10').text
    a2 = driver.find_element_by_css_selector('#scroll_02 > div.info_box.cw > p').text
    a = a1 + '|' + a2
except:
    a = ''

temp.append(a)

try:
    b = driver.find_element_by_css_selector('#_ee_doc').text
except:
    b = ''

temp.append(b)

try:
    c = driver.find_element_by_css_selector('#_ud_doc').text
except:
    c = ''

temp.append(c)

try:
    d = driver.find_element_by_css_selector('#_nb_doc')
    title = d.find_elements(By.TAG_NAME, "p")
    divs = d.find_elements(By.TAG_NAME, "div")
    idx = 0
    for div in divs:
        ps = div.find_elements(By.TAG_NAME, "p")
        print(title[idx].text)
        idx += 1
        for p in ps:
            print(p.text)
except:
    d = ''

temp.append(d)
# print(temp)

driver.close()



