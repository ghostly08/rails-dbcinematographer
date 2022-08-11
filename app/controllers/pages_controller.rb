class PagesController < ApplicationController
  def home
    @videos = Video.all
  end

  # def about
  # end

  # def contact
  # end

end
