'use strict';

const test = require('tape');
const path = require('path');
const client = require('./client')({
  testSuiteName: path.basename(__filename)
});

test('should successfully login and book appointment using the flow with limited JavaScript', (assert) => {
  assert.plan(6);
  client
      .init()
      .url(client.baseUrl)
      .getTitle()
      .then((title) => {
        assert.equal(title, 'Australian Government - Citizenship Appointment Booking');
      })
      .setValue('#clientId', '99999999999')
      .setValue('#familyName', 'Family-Name')
      .click('#submitLogin')
      // Redirected to Old Calendar by default
      .waitForExist('[href*="/calendar/text/"]', 30000)
      .timeouts('page load',30000)
      .waitForEnabled('[href*="/calendar/text/20"]', 30000)
      .getTitle()
      .then((title) => {
        assert.equal(title, 'Australian Government - Citizenship Appointment Booking Calendar - Select date');
      })
      // Go to times page
      .click('[href*="/calendar/text/"]')
      .timeouts('page load',30000)
      .getTitle()
      .then((title) => {
        assert.equal(title, 'Australian Government - Citizenship Appointment Booking Calendar - Select time');
      })
      //Go to selection confirmation
      .getAttribute('[href*="/calendar/text/20"]', 'href').then(function(links){
        var timeLink = links[0].match(/\/calendar\/text\/\d{4}-\d{2}-\d{2}\/\d{2}:\d{2}/);
        client.click(`[href*="${timeLink}"]`)
      })
      .timeouts('page load',30000)
      .waitForEnabled('.SelectionConfirmation-button', 30000)
      .getTitle()
      .then((title) => {
        assert.equal(title, 'Australian Government - Citizenship Appointment Booking Calendar - Confirm selection');
      })
      //Go to confirmation page
      .click('.SelectionConfirmation-button')
      .timeouts('page load',30000)
      .getTitle()
      .then((title) => {
        assert.equal(title, 'Australian Government - Citizenship Appointment Booking Confirmation');
      })
      .click('.logout-link')
      .timeouts('page load',30000)
      .getTitle()
      .then((title) => {
        assert.equal(title, 'Australian Government - Citizenship Appointment Booking');
      })
      .end();
});
