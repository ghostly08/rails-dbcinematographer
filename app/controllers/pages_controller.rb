class PagesController < ApplicationController
  def home
    @videos = Video.all
  end


  # def destroy
  #   @video = Video.find(params[:id])
  #   @video.destroy

  #   redirect_to root_path(video), status: :see_other
  # end

  # def about
  # end

  # def contact
  # end

end
