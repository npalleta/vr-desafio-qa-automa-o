require 'yaml'

class Settings
  def self.get_environment_path
    yaml_file_path = "/config/#{ENVIRONMENT}.yaml"
    YAML.load_file("#{File.dirname(__FILE__)}#{yaml_file_path}")
  end

  def self.get_url(path)
    "#{get_environment_path['url']}/#{path}"
  end
end
