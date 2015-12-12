class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.in_bounds(params[:bounds])
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :bounds)
  end
end
