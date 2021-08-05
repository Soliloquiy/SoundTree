class Api::UsergenresController < ApplicationController

  def create
    
    @usergenres = Usergenre.new(usergenre_params)
    @usergenres.save
  end


  private

  def usergenre_params


    params.require(:usergenre).permit(
      :user_id,
      :subgenre_id,
    )
  end

end
