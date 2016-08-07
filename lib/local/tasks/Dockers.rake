


namespace :docker do

  desc 'Run Mongo docker'
  task :monog_start do
    puts "running mongo docker..."
    docker_start DOCKERS[:mongo]
  end

  desc 'Run Node docker'
  task :node_start do
    puts "running node docker..."
    docker_start DOCKERS[:node]
  end

  desc 'Exec Node docker'
  task :node do
    puts "Entering node docker..."
    docker_exec DOCKERS[:node], " "
  end
end
  
def docker_start(instance)
  cmd = "docker start #{instance}"
  `cmd`
end

def docker_exec(instance, dir, command=nil)
  cmd = "docker exec #{ENVIRONMENT[:docker_flags]} #{instance} bash"
  if command!=nil
    cmd+= "-c \"cd#{dir} && #{command}\""
  end

  `cmd`
end
