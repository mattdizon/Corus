require 'net/http'
require 'json'
require 'date'

def getRecords(ageStart, ageEnd, bpdiff)
    current_year = DateTime.strptime("1318996912",'%s').year()
    ids = []
    uri = ("https://jsonmock.hackerrank.com/api/medical_records")
    resp = Net::HTTP.get_response(URI.parse(uri))
    initial_data = resp.body
    parsed_data = JSON.parse(initial_data)
    data  = parsed_data.fetch("data")
    res = data.select do |patient| 
        (ageStart <= patient["userDob"].to_i && patient["userDob"].to_i <= ageEnd) && 
        (patient["vitals"]["bloodPressureDiastole"] - patient["vitals"]["bloodPressureSystole"] > bpdiff)
    end
    data
end

