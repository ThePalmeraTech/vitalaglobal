class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :name
      t.integer :age
      t.string :gender
      t.string :location
      t.string :contact_information
      t.string :pregnancy_status
      t.text :medical_history
      t.text :current_medications
      t.boolean :abortion_history
      t.text :previous_pregnancy_history
      t.text :contraception_methods
      t.text :family_planning_goals
      t.text :abortion_family_planning_preferences
      t.text :privacy_and_confidentiality_preferences
      t.text :feedback_and_support
      t.boolean :terms_acceptance
      t.text :emergency_contact_information
      t.text :survey_questionnaire
      t.text :education_resource_preferences

      t.timestamps
    end
  end
end
