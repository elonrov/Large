class Api::SessionsController < ApplicationController 
  
  def create 
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil? 
      render json: ['Invalid credentials. Please try again.'], status: 401
    else 
      login!(@user)
      render 'api/users/show'; 
    end
  end

  def destroy
    if !logged_in? 
      render json: {}, status: 404
    else 
      logout! 
      render json: {}  
    end
  end

end
