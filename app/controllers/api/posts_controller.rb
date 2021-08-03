class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def new
    @post = Post.new()
  end

  def create
    
    @post = Post.new(post_params)
    @post.save

    # if @post.save
    #   session[:post_id] = post.id
    #   redirect_to '/'
    # else
    #   redirect_to '/api/signup'
    # end
  end

  private

  def post_params

    puts params.inspect
    puts "-------------"
    puts params[:post].inspect


    params.require(:post).permit(
      :user_id,
      :subgenre_id,
      :comment
    )
  end

end
