import repos from './repos'
import user from './user'
import contents from './contents'
import commits from './commits'

const settings = {
    namespaced: true,
    modules: {
        commits,
        contents,
        user,
        repos
    }
}

export default settings