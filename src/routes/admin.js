export async function get() {
    return {
        headers: { Location: '/admin/index.html' },
        status: 301
    }
}
