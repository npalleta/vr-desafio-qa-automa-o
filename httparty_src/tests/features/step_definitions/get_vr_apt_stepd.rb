Dado('que eu executo a api GET_VR_APT') do
  @get_vr_apt = GetVRAPT.new
  @get_vr_apt.log_date
  @get_vr_apt.get_request
end

Então('o status code {int} deverá  ser validado') do |status_code|
  @get_vr_apt.validate_status_code(status_code)
end

Então('a key do json {string} deverá ser validada') do |key|
  @get_vr_apt.validate_key(key)
end

Então('a lista de dados sobre estabelecimentos deverá ser apresentada') do
  @get_vr_apt.get_list_type_of_establishment
end

Então('o último item da lista de dados sobre estabelecimentos deverá ser apresentada') do
  @get_vr_apt.get_last_index_of_type_of_establishment
end
