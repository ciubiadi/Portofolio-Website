/** @type {import('next').NextConfig} */
const nextConfig = {
    // in order for the action attribute to work properrly, and formData be passed
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig
