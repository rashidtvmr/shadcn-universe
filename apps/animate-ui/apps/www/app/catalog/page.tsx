import fs from 'fs';
import path from 'path';

const COMPONENTS_ROOT = path.join(process.cwd(), '../../../../packages/components');

interface ComponentInfo {
  name: string;
  repo: string;
  batch: string;
  path: string;
}

function getComponents(): ComponentInfo[] {
  const components: ComponentInfo[] = [];
  
  if (!fs.existsSync(COMPONENTS_ROOT)) {
    return components;
  }

  const batches = fs.readdirSync(COMPONENTS_ROOT).filter(dir => dir.startsWith('batch-'));
  
  for (const batch of batches) {
    const batchPath = path.join(COMPONENTS_ROOT, batch);
    const repos = fs.readdirSync(batchPath);
    
    for (const repo of repos) {
      const repoPath = path.join(batchPath, repo);
      if (!fs.statSync(repoPath).isDirectory()) continue;
      
      // Look for component files in subdirectories
      const subDirs = fs.readdirSync(repoPath);
      for (const subDir of subDirs) {
        const subDirPath = path.join(repoPath, subDir);
        if (!fs.statSync(subDirPath).isDirectory()) continue;
        
        const files = fs.readdirSync(subDirPath).filter(f => f.endsWith('.tsx') || f.endsWith('.jsx'));
        for (const file of files) {
          components.push({
            name: path.basename(file, path.extname(file)),
            repo,
            batch,
            path: path.join(batch, repo, subDir, file),
          });
        }
      }
    }
  }
  
  return components.sort((a, b) => a.name.localeCompare(b.name));
}

export default function CatalogPage() {
  const components = getComponents();
  
  // Group by batch and repo
  const grouped: Record<string, Record<string, ComponentInfo[]>> = {};
  for (const comp of components) {
    if (!grouped[comp.batch]) grouped[comp.batch] = {};
    if (!grouped[comp.batch][comp.repo]) grouped[comp.batch][comp.repo] = [];
    grouped[comp.batch][comp.repo].push(comp);
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold mb-2">Component Catalog</h1>
      <p className="text-muted-foreground mb-8">
        {components.length} components from {Object.values(grouped).reduce((sum, b) => sum + Object.keys(b).length, 0)} repositories
      </p>
      
      {Object.entries(grouped).map(([batch, repos]) => (
        <div key={batch} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 capitalize">{batch.replace('-', ' ')}</h2>
          <div className="grid gap-4">
            {Object.entries(repos).map(([repo, comps]) => (
              <div key={repo} className="border rounded-lg p-4 bg-card">
                <h3 className="text-lg font-medium mb-2">{repo}</h3>
                <div className="flex flex-wrap gap-2">
                  {comps.map((comp) => (
                    <span
                      key={comp.path}
                      className="px-2 py-1 text-sm bg-secondary rounded-md font-mono"
                    >
                      {comp.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
