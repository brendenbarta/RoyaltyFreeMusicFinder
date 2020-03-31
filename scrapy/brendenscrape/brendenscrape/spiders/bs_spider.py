import scrapy

 
class BenSoundSpider(scrapy.Spider):
    name = 'benSoundSpider'
    start_urls = ['https://www.bensound.com/']

    def parse(self, response):
            for href in response.css('.img_mini a::attr(href)'):
                yield response.follow(href, self.parse_music)

            for href in response.css('.current2::attr(href)'):
                yield response.follow(href, self.parse)

    def parse_music(self, response):
                yield {
                    'url': response.url,
                    'title': response.css('#titre_focus h2 a::text').get(),
                    'producer': response.css('.composer::text').get(),
                    'keyWords': response.css('.tag a::text').getall(),
                    'description':response.css('.acc p::text').getall()[1],
                }
