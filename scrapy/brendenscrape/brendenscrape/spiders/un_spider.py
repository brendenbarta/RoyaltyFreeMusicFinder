import scrapy

 
class UnSpider(scrapy.Spider):
    name = 'unSpider'
    start_urls = ['https://www.unminus.com//']
    print("hey")
    def parse(self, response):
            for title in response.css('.()'):
                yield {'title': title.css('.native-audio-container data-track a ::text').get()}
