CREATE USER socdis_user With PASSWORD 'social';
CREATE DATABASE social_distance WITH OWNER socdis_user;
GRANT ALL PRIVELEGES ON DATABASE social_distance TO socdis_user;