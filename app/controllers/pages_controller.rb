class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def home
    @videos = Video.all
  end

  # def about
  # end

  # def contact
  # end

end
