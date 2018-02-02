describe('angularjs homepage', function() {
    beforeEach(function() {
        browser.get('/#/');
        browser.driver.sleep(2000);
        browser.ignoreSynchronization = true;
    });
  
    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Ionic App');
    });
  });