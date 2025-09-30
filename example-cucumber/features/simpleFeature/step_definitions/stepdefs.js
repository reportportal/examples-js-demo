const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
  if (today === 'Friday') {
    return 'TGIF';
  }
  return 'Nope';
}

Given('list of holidays', function() {
  this.holidays = [
    'New Years',
    'Martin Luther King, Jr.',
    'Presidents',
    'Memorial',
    'Independence',
    'Labor',
    'Veterans',
    'Thanksgiving',
    'Christmas',
  ];
});

Given('today is {string}', function(givenDay) {
  this.info('set the current day');
  this.today = givenDay;
});

When("I ask whether it's Friday yet", function() {
  this.info('set the correct answer');
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function(expectedAnswer) {
  this.info('validate the answer');
  if (this.actualAnswer !== expectedAnswer) {
    this.error(`Test error: ${this.actualAnswer} !== ${expectedAnswer}`);
  }
  assert.equal(this.actualAnswer, expectedAnswer);
});

Given('today is Monday', function() {
  this.info('set the current day');
  this.today = 'Monday';
});

When(/^I ask whether it's Monday yet$/, function() {
  this.info('set the correct answer');
  this.actualAnswer = 'Nope';
});

Then('I should be told Yes', function() {
  this.info('validate the answer');
  const expectedAnswer = 'Yes';
  if (this.actualAnswer !== expectedAnswer) {
    this.error(`Test error: ${this.actualAnswer} !== ${expectedAnswer}`);
  }
  assert.equal(this.actualAnswer, expectedAnswer);
});

When("I ask wheter it's Holiday", function() {
  this.info('set the correct answer');
  this.actualAnswer = 'Nope';
  if (this.holidays.includes(this.today)) {
    this.actualAnswer = 'Yes';
  }
});
