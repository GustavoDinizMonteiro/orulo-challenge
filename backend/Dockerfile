FROM ruby:2.5.1

RUN apt-get update -qq && apt-get install -y build-essential

RUN apt-get install -y libpq-dev libxml2-dev libxslt1-dev

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ADD Gemfile* $APP_HOME/
RUN bundle install

ADD . $APP_HOME