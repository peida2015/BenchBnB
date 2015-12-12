class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    northEast = bounds["northEast"];
    southWest = bounds["southWest"];

    returned = self.all().select do |bench|
      btwLats = bench.lat < northEast["lat"].to_f && bench.lat > southWest["lat"].to_f;
      btwLngs = bench.lng < northEast["lng"].to_f && bench.lng > southWest["lng"].to_f;
      btwLngs && btwLats
    end
    # debugger
  end

end
