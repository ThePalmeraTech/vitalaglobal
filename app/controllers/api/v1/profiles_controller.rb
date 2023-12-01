class Api::V1::ProfilesController < ApplicationController
  before_action :set_profile, only: %i[show destroy]

  def index
    profiles = Profile.order(created_at: :desc)
    render json: profiles
  end


  def create
    profile = Profile.new(profile_params)
    if profile.save
      render json: profile, status: :created, location: api_v1_profile_url(profile)
    else
      render json: profile.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @profile
  end

  def destroy
    @profile&.destroy
    render json: { message: 'Profile deleted!' }
  end

  private

  def profile_params
    params.require(:profile).permit(
      :name,
      :age,
      :gender,
      :location,
      :contact_information,
      :pregnancy_status,
      :medical_history,
      :current_medications,
      :abortion_history,
      :previous_pregnancy_history,
      :contraception_methods,
      :family_planning_goals,
      :abortion_family_planning_preferences,
      :privacy_and_confidentiality_preferences,
      :feedback_and_support,
      :terms_acceptance,
      :emergency_contact_information,
      :survey_questionnaire,
      :education_resource_preferences
    )
  end


  def set_profile
    @profile = Profile.find(params[:id])
  end
end
