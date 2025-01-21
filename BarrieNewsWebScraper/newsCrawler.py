# Student Name: Xiang Lu
# Student Number: 200563938
# Description: Final Project
# Date: December 3, 2024

from urllib.request import urlopen, Request
from bs4 import BeautifulSoup
from openpyxl import Workbook
import time


def newsCrawler(keyword, endPage):

    # Parameters:
    # keyword: search keyword (str)
    # endPage: maximum number of pages to crawl (int)

    # Create an Excel workbook
    wb = Workbook()
    ws = wb.active
    # Add column header to the worksheet
    ws.append(['title']) 

    # Start from the first page
    page = 1 

    # Iterate through pages from 1 to the specified endPage
    for page in range(1, endPage + 1):
        # Construct the search URL with the keyword and page number
        url = f'https://www.ctvnews.ca/search-results/search-ctv-news-7.137?q={keyword}&page={page}'
            
        try:
            '''
            Send a request to get the content of the page, because the use of uillib,
            it is easy to be intercepted by the site and return statu code 403, 
            so I added headers, mimic the user to visit. 
            (This part is not in your slides, I learned it online)
            '''
            request = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            response = urlopen(request)
            html = response.read().decode('utf-8')
                
            # Parse the HTML using BeautifulSoup
            soup = BeautifulSoup(html, 'html.parser')
                
            # Locate the class containing news titles and extract them
            newsItems = soup.select('li.searchHit h3 a')
    
            # If no news is found, it might be the last page
            if not newsItems:
                print(f'No news found on page {page}, possibly the end.')
                break

            # Write each news title to the worksheet and print the completed page number
            for item in newsItems:
                title = item.text.strip()
                ws.append([title])  # Write the title to Excel
                print(f'Page {page} scraped: {title}')
                
            # Pause for 2 seconds between pages to avoid overloading the server.
            # Save the scraped news to the Excel file.
            time.sleep(2)
            newsReport = f'{keyword}.xlsx'
            wb.save(newsReport)
            
        except Exception as e:
                print(f'Error occurred while scraping page {page}: {e}')
    
    print(f'News scraping completed. Results saved to {newsReport}')

# Call the function
newsCrawler('ctvNews', 8)
