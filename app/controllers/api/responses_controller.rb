class Api::ResponsesController < ApplicationController


    def create 
        @response = Response.new(response_params)
        @response.story_id = params[:story_id]
        @response.user_id = current_user.id

        if @response.save 
            render "api/responses/show"
        else
            render json: @response.errors.full_messages, status: 422
        end
    end

    private
    def response_params
        params.require(:response).permit(:body)
    end

end
