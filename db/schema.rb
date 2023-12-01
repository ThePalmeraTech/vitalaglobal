# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_12_01_042156) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "blog_posts", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.string "featured_image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "profiles", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "gender"
    t.string "location"
    t.string "contact_information"
    t.string "pregnancy_status"
    t.text "medical_history"
    t.text "current_medications"
    t.boolean "abortion_history"
    t.text "previous_pregnancy_history"
    t.text "contraception_methods"
    t.text "family_planning_goals"
    t.text "abortion_family_planning_preferences"
    t.text "privacy_and_confidentiality_preferences"
    t.text "feedback_and_support"
    t.boolean "terms_acceptance"
    t.text "emergency_contact_information"
    t.text "survey_questionnaire"
    t.text "education_resource_preferences"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
