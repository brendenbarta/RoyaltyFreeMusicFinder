import scrapy


class BendSoundSpider(scrapy.Spider):
    name = 'benSoundSpider'
    allowed_domains = ['https://www.bensound.com/']
    start_urls = ['https://www.bensound.com/']


    def parse(self, response):
            for href in response.css('.img_mini a::attr(href)'):
                yield response.follow(href, self.parse_music)


            for href in response.css('.links a.current2::attr(href)').getall()[-1]:
                yield response.follow(href, self.parse)

    def parse_music(self, response):


            def extract_with_css(query):
                return response.css(query).get(default='').strip()

                yield {
                    # 'title': extract_with_css('.c-mix-hdgSans_inline::text'),
                    # 'producer': extract_with_css('.c-txt_attribution a::text'),
                    'keyWords': extract_with_css('.taglist a::text'),
                }
