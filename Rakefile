
# Ruby tip
#  __FILE__ means current file name (relative)
rootDir = File.dirname(__FILE__)
require File.dirname(__FILE__) + '/lib/local/environments/local.rb'
# This line, simple concatenation of paths, to make a complete path to local.rb


Dir.glob('lib//local/tasks/*.rake').each { |r| import r }  # Import all Rake scripts
Dir[File.dirname(__FILE__)+'/lib/local/task/utils/*.rb'].each { |r| require r }

desc 'Initialize Environment'
task :default do

  ENVIRONMENT[:root_path] = rootDir
  
  invoke 'dockers:mongo_start'
  invoke 'dockers:node_start'
  
  invoke 'client:clean_node_modules'
  invoke 'client:clean_typings'
  invoke 'client:clean_js'
  invoke 'client:clean_vendor'

  invoke_with_params 'node:npm_install[Client]'
  invoke 'node:npm_postinstall'
  invoke 'node:npm_bower'

  invoke 'server:clean_node_modules'
  invoke_with_params 'node:npm_install[Server]'
  
#  invoke 'app:build'

end

def invoke task
  Rake::Task[task].invoke  
end

def invoke_with_params params
  Rake::Task[task].invoke("args")
end
