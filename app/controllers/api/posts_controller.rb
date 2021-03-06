class Api::PostsController < ApplicationController

  def index
    @genres = Genre.all


    # @user_detail = 
    render json: @genres, include: {subgenres: {include: {posts: {include: {user: {}}}}}}
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

  def update
    @post = Post.find(params[:id])
      puts "here"
      @post.update!(like_count: params[:like_count])
  end

  private

  def post_params


    params.require(:post).permit(
      :user_id,
      :subgenre_id,
      :comment
    )
  end

  def put_params


    params.require(:post).permit(
      :id,
      :like_count
    )
  end


end
