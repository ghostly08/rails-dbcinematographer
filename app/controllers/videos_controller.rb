class VideosController < ApplicationController
   #skip_before_action :authenticate_user!, only: :show

  # def index
  #   @videos = Video.all
  # end

  def show
    @video = Video.find(params[:id])
  end

  def new
    @video = Video.new
  end

  def create
    @video = Video.new(video_params)
    @video.save

    redirect_to root_path
  end

  def edit
    @video = Video.find(params[:id])
  end

  def update
    @video = Video.find(params[:id])
    @video.update(video_params)

    redirect_to root_path
  end

  def destroy
    @video = Video.find(params[:id])
    @video.destroy

    redirect_to @video, status: :see_other
  end

  private

def video_params
  params.require(:video).permit(:name, :link, :category, :description)
end

end
