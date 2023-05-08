require 'httparty'

class GetVRAPT
  include RSpec::Matchers

  '''
    Informa a data de execução do teste
  '''
  def log_date
    date_now = DateTime.now
    date_now.strftime('%d/%m/%Y %H:%M')
    puts("\n--- Execution Time: #{date_now} ---")
  end

  '''
    Realiza a chamada para a api VR_APT - verbo get
  '''
  def get_request
    @response = HTTParty.get Settings.get_url('api-web/comum/enumerations/VRPAT'),
      headers: {
        'Content-Type' => 'application/json'
      }
  end

  '''
    Valida o status code da chamada
  '''
  def validate_status_code(status_code)
    expect(@response.code).to eql(status_code)
  end

  '''
    Valida uma chave presente do response da chamada
  '''
  def validate_key(key)
    @json_resp = JSON.parse(@response.body)
    @json_resp.should include(key)
  end

  '''
    Apresenta o conteúdo presente no índice typeOfEstablishment
  '''
  def get_list_type_of_establishment
    @type_of_establishment_obj = @json_resp['typeOfEstablishment']
    @type_of_establishment_obj.each do |item|
      puts "ESTABLISHMENT KEY: #{item['key']} => ESTABLISHMENT NAME: #{item['name']}"
    end
  end

  '''
    Apresenta o último conteúdo presente no índice typeOfEstablishment
  '''
  def get_last_index_of_type_of_establishment
    last_index_of_establishment_data = @type_of_establishment_obj[@type_of_establishment_obj.length - 1]
    puts "\n#{last_index_of_establishment_data}\n"
    last_index_of_establishment_data.each do |item|
      puts "LAST INDEX OF ESTABLISHMENT DATA: #{item[0]} => #{item[1]}"
    end
  end
end
