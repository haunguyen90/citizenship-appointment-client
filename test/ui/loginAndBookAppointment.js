'use strict';

const test = require('tape');
const path = require('path');
const moment = require('moment');
const client = require('./client')({
  testSuiteName: path.basename(__filename)
});

test('should successfully login and book appointment', (assert) => {
  assert.plan(4);
  client
      .init()
      .url(client.baseUrl)
      .getTitle()
      .then((title) => {
        assert.equal(title, 'Australian Government - Citizenship Appointment Booking - Login');
      })
      .setValue('#clientId', '01234567890')
      .setValue('#familyName', 'Familyname')
      .click('#submitLogin')
      .timeouts('page load',30000)
      .waitForVisible('.calendar-date',30000)
      .getTitle()
      .then((title) => {
        assert.equal(title, 'Australian Government - Citizenship Appointment Booking - Calendar');
      })
      .waitForVisible('.calendar-nav-next', 30000)
      .getAttribute('[class*="calendar-date date-unavailable date-20"]', 'class').then(function(cells){
        var className = cells[0].match(/\d{4}-\d{2}-\d{2}/);
        var appointmentDate = moment(className, "YYYY-MM-DD").add(1, 'months');
        var monthLink = appointmentDate.format('YYYY-MM');

        var bookableDateSelector = `[class*="calendar-date date-bookable date-${monthLink}"]`;

        client
          .waitForVisible(`[href*="#month/${monthLink}"]`, 30000)
          .click(`[href*="#month/${monthLink}"]`)
          .waitForVisible(bookableDateSelector, 30000)
          .getAttribute(bookableDateSelector, 'class').then(function(nextMonthCells){
              var dateLink = nextMonthCells[0].match(/\d{4}-\d{2}-\d{2}/);
              var availableTimesSelector = `.appointment-section.date-${dateLink} a.appointment-link`;
              client
                .click(`a.date-link.date-${dateLink}`)
                .waitForVisible(availableTimesSelector, 30000)
                .click(availableTimesSelector)
          })
      })
      .waitForVisible('#submitCalendar', 30000)
      .click('#submitCalendar')
      .timeouts('page load',30000)
      .waitForVisible('[class*="barcode-frame"]', 30000)
      .getTitle()
      .then((title) => {
        assert.equal(title, 'Australian Government - Citizenship Appointment Booking - Appointment Confirmation');
      })
      .click('.logout-link')
      .timeouts('page load',30000)
      .waitForVisible('#clientId', 30000)
      .getTitle()
      .then((title) => {
        assert.equal(title, 'Australian Government - Citizenship Appointment Booking - Login');
      })
      .end();
});
