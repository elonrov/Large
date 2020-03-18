class Api::ResponsesController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    
    def create
        @response = Response.new(response_params)
        @response.user_id = current_user.id
        @response.date = Time.now
        if @response.save
            render '/api/responses/show'
        else
            render json: @response.errors.full_messages, status: 422
        end
    end

    def show
        @response = Response.find(params[:id])
        render 'api/responses/show'
    end

    def index
        @responses = Response.all
        render "api/responses/index"
    end

    def update
        @response = Response.find(params[:id])
        if @response.update(response_params)
            render "api/responses/show"
        else
            render json: @response.errors.full_messages, status: 422
        end
    end

    def destroy
        @response = Response.find(params[:id])
        
        if @response
            @response.destroy
            render "api/stories/index"
        else
            render json: ["Response not found"], status: 404
        end
    end

    private
    def response_params
        params.require(:response).permit(:story_id, :body)
    end

end
