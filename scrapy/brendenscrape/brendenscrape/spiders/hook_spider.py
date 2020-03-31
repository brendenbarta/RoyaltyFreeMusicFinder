import scrapy

 
class HookSpider(scrapy.Spider):
    name = 'hookSpider'
    start_urls = ['https://www.hooksounds.com/royalty-free-music/'] 

    print("we parsing boiz")

    def parse(self, response):
        for href in response.css('.entry-title a::attr(href)'):
    
            yield response.follow(href, self.parse_music)   

            # for href in response.css('.next a::attr(href)'):
            #     yield response.follow(href, self.parse)         

    def parse_music(self, response):
        print("we parsing music boiz")
        yield {
            'url': response.url,
            # 'response.xpath('//h1[@class="page-title"]/a/span/text()').extract_first(),
            # 'producer': response.css('.author-link::text').get(),
            'keyWords': response.css('.entry-tags a::text').getall(), #need to figure out how to include bold text that is missing.
            'description':response.css('.entry-content p::text').getall(),
        }



 
