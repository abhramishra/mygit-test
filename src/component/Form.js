import React, {useState, useEffect} from 'react'
import axios from 'axios'

function MyForm(props) {
    const [username, setUsername] = useState('')
    const [repo, setRepo] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://api.github.com/users/${username}/repos`)
            .then(res => {
                const data = res.data
                if (data.length) {
                    setRepo(data)
                } else {
                    alert(`There is no such Github Username ${username}`)
                    setUsername('')
                    setRepo([])
                }
                console.log(data)
            })
            .catch(err => {
                alert(`There is no such Github Username ${username}`)
                setUsername('')
                setRepo([])
                console.log("Error is getting data ",err)
            })
    }
    return (
        <div className='container'>
            <h1>Get your repo here</h1> 
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className=''>Enter your git username</label>    
                    <input type='text' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}  
                        required
                        className='form-control'
                    /> <br/>
                </div>
                
                <input type='submit' className='btn btn-primary' />
            </form><br/>          
            {
                repo.length ? (
                    <>
                    <h2 className='text-muted heading'>Total Repo - {repo.length} </h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Repo Name</th>
                                <th>Language</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                repo.map(data => {
                                    return (
                                        <tr key={data.id}>
                                            <td>{data.name}</td>
                                            <td>{data.language}</td>
                                            <td>{data.description}</td>
                                        </tr>
                                    )          
                                })
                            }
                        </tbody>
                    </table>
                    </>

                ) : (
                    <></>
                ) 
            }
        </div>
    )
}

export default MyForm

/*
allow_forking: true
archive_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/{archive_format}{/ref}"
archived: false
assignees_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/assignees{/user}"
blobs_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/git/blobs{/sha}"
branches_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/branches{/branch}"
clone_url: "https://github.com/abhramishra/Advanced_Ajax.git"
collaborators_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/collaborators{/collaborator}"
comments_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/comments{/number}"
commits_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/commits{/sha}"
compare_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/compare/{base}...{head}"
contents_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/contents/{+path}"
contributors_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/contributors"
created_at: "2019-08-20T12:42:36Z"
default_branch: "master"
deployments_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/deployments"
description: null
disabled: false
downloads_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/downloads"
events_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/events"
fork: false
forks: 0
forks_count: 0
forks_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/forks"
full_name: "abhramishra/Advanced_Ajax"
git_commits_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/git/commits{/sha}"
git_refs_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/git/refs{/sha}"
git_tags_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/git/tags{/sha}"
git_url: "git://github.com/abhramishra/Advanced_Ajax.git"
has_downloads: true
has_issues: true
has_pages: false
has_projects: true
has_wiki: true
homepage: null
hooks_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/hooks"
html_url: "https://github.com/abhramishra/Advanced_Ajax"
id: 203374020
is_template: false
issue_comment_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/issues/comments{/number}"
issue_events_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/issues/events{/number}"
issues_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/issues{/number}"
keys_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/keys{/key_id}"
labels_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/labels{/name}"
language: "Ruby"
languages_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/languages"
license: null
merges_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/merges"
milestones_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/milestones{/number}"
mirror_url: null
name: "Advanced_Ajax"
node_id: "MDEwOlJlcG9zaXRvcnkyMDMzNzQwMjA="
notifications_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/notifications{?since,all,participating}"
open_issues: 6
open_issues_count: 6
owner: {login: 'abhramishra', id: 48148344, node_id: 'MDQ6VXNlcjQ4MTQ4MzQ0', avatar_url: 'https://avatars.githubusercontent.com/u/48148344?v=4', gravatar_id: '', …}
private: false
pulls_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/pulls{/number}"
pushed_at: "2022-04-12T01:59:31Z"
releases_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/releases{/id}"
size: 263
ssh_url: "git@github.com:abhramishra/Advanced_Ajax.git"
stargazers_count: 0
stargazers_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/stargazers"
statuses_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/statuses/{sha}"
subscribers_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/subscribers"
subscription_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/subscription"
svn_url: "https://github.com/abhramishra/Advanced_Ajax"
tags_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/tags"
teams_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/teams"
topics: []
trees_url: "https://api.github.com/repos/abhramishra/Advanced_Ajax/git/trees{/sha}"
updated_at: "2019-08-20T13:47:03Z"
url: "https://api.github.com/repos/abhramishra/Advanced_Ajax"
visibility: "public"
watchers: 0
watchers_count: 0
*/