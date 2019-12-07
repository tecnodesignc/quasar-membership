export default {
    district: {
        permission: 'membership.districts.manage',
        activated: true,
        authenticated: true,
        path: '/membership/district/index',
        name: 'qmembership.admin.district',
        page: () => import('@imagina/qmembership/_pages/admin/districts/index'),
        layout: () => import('@imagina/qsite/_layouts/master.vue'),
        title: 'qmembership.layout.distric.plural',
        icon: 'fas fa-home',
    },
    congregation: {
        permission: 'membership.congregations.manage',
        activated: true,
        authenticated: true,
        path: '/membership/congregation/index',
        name: 'qmembership.admin.congregation',
        page: () => import('@imagina/qmembership/_pages/admin/congregations/index'),
        layout: () => import('@imagina/qsite/_layouts/master.vue'),
        title: 'qmembership.layout.congregation.plural',
        icon: 'fas fa-layer-group',
    },
    study: {
        permission: 'membership.studies.manage',
        activated: true,
        authenticated: true,
        path: '/membership/study/index',
        name: 'qmembership.admin.study',
        page: () => import('@imagina/qmembership/_pages/admin/studies/index'),
        layout: () => import('@imagina/qsite/_layouts/master.vue'),
        title: 'qmembership.layout.study.plural',
        icon: 'fas fa-layer-group',
    },
    profession: {
        permission: 'membership.professions.manage',
        activated: true,
        authenticated: true,
        path: '/membership/profession/index',
        name: 'qmembership.admin.profession',
        page: () => import('@imagina/qmembership/_pages/admin/professions/index'),
        layout: () => import('@imagina/qsite/_layouts/master.vue'),
        title: 'qmembership.layout.profession.plural',
        icon: 'fas fa-layer-group',
    },
    committee: {
        permission: 'membership.committees.manage',
        activated: true,
        authenticated: true,
        path: '/membership/committee/index',
        name: 'qmembership.admin.committee',
        page: () => import('@imagina/qmembership/_pages/admin/committees/index'),
        layout: () => import('@imagina/qsite/_layouts/master.vue'),
        title: 'qmembership.layout.committee.plural',
        icon: 'fas fa-layer-group',
    },
    profile: {
        permission: 'membership.profiles.manage',
        activated: true,
        authenticated: true,
        path: '/membership/profile/index',
        name: 'qmembership.admin.profile',
        page: () => import('@imagina/qmembership/_pages/admin/profiles/index'),
        layout: () => import('@imagina/qsite/_layouts/master.vue'),
        title: 'qmembership.layout.profile.plural',
        icon: 'fas fa-layer-group',
    },
    workstation: {
        permission: 'membership.workstations.manage',
        activated: true,
        authenticated: true,
        path: '/membership/workstation/index',
        name: 'qmembership.admin.workstation',
        page: () => import('@imagina/qmembership/_pages/admin/workstations/index'),
        layout: () => import('@imagina/qsite/_layouts/master.vue'),
        title: 'qmembership.layout.workstation.plural',
        icon: 'fas fa-layer-group',
    },

}
