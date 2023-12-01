# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# db/seeds.rb

genders = ["Male", "Female", "Non-Binary"]
pregnancy_statuses = ["Not pregnant", "Pregnant", "Planning"]
contraception_methods = ["None", "Pill", "IUD", "Condom", "Implant"]
family_planning_goals = ["No current plans", "Seeking information", "Planning for a child", "Using contraception"]
preferences = ["Prefers not to say", "Privacy important", "Open to discuss"]
feedback_options = ["Open to surveys", "No surveys", "Feedback via email preferred"]

# A list of realistic names for the purpose of the seeds
names = ["Alex Smith", "Jamie Johnson", "Jordan Brown", "Taylor Davis", "Casey Martinez", "Riley Garcia", "Morgan Wilson", "Charlie Anderson", "Bailey Thomas"]

names.each_with_index do |name, i|
  Profile.create(
    name: name,
    age: rand(18..50),
    gender: genders.sample,
    location: "City #{i + 1}",
    contact_information: "user#{i + 1}@example.com",
    pregnancy_status: pregnancy_statuses.sample,
    medical_history: "No significant history.",
    current_medications: "None",
    abortion_history: [true, false].sample,
    previous_pregnancy_history: "N/A",
    contraception_methods: contraception_methods.sample,
    family_planning_goals: family_planning_goals.sample,
    abortion_family_planning_preferences: preferences.sample,
    privacy_and_confidentiality_preferences: preferences.sample,
    feedback_and_support: feedback_options.sample,
    terms_acceptance: true,
    emergency_contact_information: "Emergency contact available upon request",
    survey_questionnaire: "Willing to participate in surveys",
    education_resource_preferences: ["Online materials", "Community classes", "One-on-one counseling"].sample,
    created_at: rand(1..365).days.ago,
    updated_at: Time.current
  )
end

70.times do
  BlogPost.create(
    title: "Sample Title #{rand(1000)}", # Random title
    content: "Sample content #{rand(1000)}", # Random content
    featured_image_url: BlogPost.random_image_url # Random image URL
  )
end

puts 'Profiles have been seeded'
