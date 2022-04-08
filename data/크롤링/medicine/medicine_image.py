from selenium import webdriver
from selenium.webdriver.common.by import By

import os, shutil

import time

filepath = 'C:\\Users\\User\\ssafy_6\\medicine_img'

options = webdriver.ChromeOptions()
options.add_argument('headless')

options.add_experimental_option("prefs", {
  "download.default_directory": "C:\\Users\\User\\ssafy_6\\medicine_img",
  "download.prompt_for_download": False,
  "download.directory_upgrade": True,
  "safebrowsing.enabled": True
})

driver = webdriver.Chrome(chrome_options=options)
driver.get('https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/147426403087300104')
time.sleep(1)

filename = max([filepath + '\\' + f for f in os.listdir(filepath)], key=os.path.getctime)
shutil.move(os.path.join(filepath, filename), './img/200808876.jpg')

driver.close()