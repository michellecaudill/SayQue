class PostsController < ApplicationController

def index
	@new_post = Post.new
	@all_posts = Post.order(created_at: :desc).all 
end

 def new
   @post = Post.new
 end

  def create
    @new_post = Post.new(post_params)

    respond_to do |format|
      if @new_post.save
        format.html { redirect_to root_path }
        format.json { render :show, status: :created, location: @post }
      else
				@all_posts = Post.order(created_at: :desc).all 
        format.html { render :index }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

private

def post_params
	params.require(:post).permit(:comment)
  end
end

