require 'httparty'

class GetVRAPT
  include RSpec::Matchers

  def log_date
    date_now = DateTime.now
    date_now.strftime('%d/%m/%Y %H:%M')
    puts("\n--- Execution Time: #{date_now} ---")
  end

  def get_request
    @response = HTTParty.get Settings.get_url('api-web/comum/enumerations/VRPAT'),
      headers: {
        'Content-Type' => 'application/json'
      }
  end

  def validate_status_code(status_code)
    expect(@response.code).to eql(status_code)
  end

  def validate_key(key)
    @json_resp = JSON.parse(@response.body)
    @json_resp.should include(key)
  end

  def get_list_type_of_establishment
    @type_of_establishment_obj = @json_resp['typeOfEstablishment']
    @type_of_establishment_obj.each do |item|
      puts "ESTABLISHMENT KEY: #{item['key']} => ESTABLISHMENT NAME: #{item['name']}"
    end
  end

  def get_last_index_of_type_of_establishment
    last_index_of_establishment_data = @type_of_establishment_obj[@type_of_establishment_obj.length - 1]
    puts "\n#{last_index_of_establishment_data}\n"
    last_index_of_establishment_data.each do |item|
      puts "LAST INDEX OF ESTABLISHMENT DATA: #{item[0]} => #{item[1]}"
    end
  end
end
