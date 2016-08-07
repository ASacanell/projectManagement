

namespace :node do

  
  desc 'Execute > npm install'
  task :npm_install, :where do |t, args|
    cmd = "npm install"
    node_exec args[:where], cmd
  end

  desc 'Execute > npm postinstall'
  task :npm_postinstall do 
    cmd = "npm run postinstall"
    node_exec "Client", cmd
  end

  desc 'Execute > bower install'
  task :npm_bower do
    cmd = "npm run bowerINstall"
    node_exec "Client", cmd
  end
  
end

def node_exec( dir, command)
  docker_exec DOCKERS[:node], dir, command
end
