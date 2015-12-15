class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.in_bounds(params[:bounds])
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
# debugger
    @bench.save!
    render :show
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating, :bounds)
  end
end
