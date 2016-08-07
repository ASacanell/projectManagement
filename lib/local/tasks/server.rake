

serverDir="${ENVIRONMENT[:root_Path]}/Server/"
namespace :server do

  desc 'Clean node_modules'
  task :clean_npde_modules do
    clean_folder "node_modules/*"
  end
end



def clean_folder(path_folder)
      path = serverDir+path_folder
      cmd = "rm -r ${path}"
      `cmd`
end
  
