require 'allure-cucumber'
require 'rspec'
require 'yaml'

ENVIRONMENT = ENV['ENVIRONMENT']

AllureCucumber.configure do |config|
  config.results_directory = 'report/allure-results'
  config.clean_results_directory = true
  config.logging_level     = Logger::INFO
  config.logger            = Logger.new($stdout, Logger::DEBUG)
  config.environment       = 'homolog'

  # these are used for creating links to bugs or test cases where {} is replaced with keys of relevant items
  config.link_tms_pattern   = 'http://www.jira.com/browse/{}'
  config.link_issue_pattern = 'http://www.jira.com/browse/{}'
  config.tms_prefix         = 'HIPTEST--'
  config.issue_prefix       = 'JIRA++'
  config.severity_prefix    = 'URGENCY:'
  config.epic_prefix        = 'epic:'
  config.feature_prefix     = 'feature:'
  config.story_prefix       = 'story:'

  # additional metadata
  # environment.properties
  config.environment_properties = {
    custom_attribute: 'nothing'
  }
  # categories.json
  # config.categories = File.new('my_custom_categories.json')
end
