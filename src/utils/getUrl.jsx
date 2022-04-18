const getUrl = (owner, repository, branch = 'master') => owner
  && repository
  && `https://api.github.com/repos/${owner}/${repository}/git/trees/${branch}`;
export default getUrl;
