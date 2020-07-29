class SiteNotifer < ApplicationRecord
  
  enum connect_telegram: {
    disable: 0,
    allow: 1
  }

  enum status: {
    disable: 0,
    active: 1,
    pending: 2,
  }

end
